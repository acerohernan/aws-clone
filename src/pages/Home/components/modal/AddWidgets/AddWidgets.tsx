import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo, useState } from 'react';
import { HomeWidget } from '../../../../../api/user/types';
import Card, { CardBody } from '../../../../../components/Card';
import Modal from '../../../../../components/Modal';
import { ModalInheritProps } from '../../../../../components/Modal/types';
import { allWidgets } from '../../../constants/widgets';
import useWidgets, { useWidgetsMutation } from '../../../hooks/useWidgets';

interface Props extends ModalInheritProps {}

const AddWidgetsModal: React.FC<Props> = ({ onDismiss }) => {
  const { data: widgetsInUse } = useWidgets();
  const mutation = useWidgetsMutation();
  const [selectedWidgets, setSelectedWidgets] = useState<
    Record<string, HomeWidget>
  >({});
  const queryClient = useQueryClient();

  const handleSelectWidget = useCallback(
    (widget: HomeWidget) => {
      if (selectedWidgets[widget.type]) {
        setSelectedWidgets((prev) => {
          const {
            [widget.type]: {},
            ...items
          } = prev;
          console.log(items);
          return items;
        });
      } else {
        setSelectedWidgets((prev) => ({ ...prev, [widget.type]: widget }));
      }
    },
    [selectedWidgets]
  );

  const handleSendWidgets = useCallback(() => {
    const widgets = [
      ...(widgetsInUse ?? []),
      ...Object.values(selectedWidgets),
    ];

    queryClient.setQueryData(['user/home/widgets'], widgets);
    mutation.mutate(widgets);
    onDismiss && onDismiss();
  }, [widgetsInUse, selectedWidgets]);

  const widgetsToAdd = useMemo<HomeWidget[]>(() => {
    const widgetsArr: HomeWidget[] = [];

    Object.values(allWidgets).forEach((widget) => {
      const exists = widgetsInUse?.some(
        (widgetInUse) => widgetInUse.type === widget.type
      );

      if (!exists) widgetsArr.push(widget);
    });

    return widgetsArr;
  }, [widgetsInUse]);

  return (
    <Modal
      onDismiss={onDismiss}
      title="Add widgets"
      actionText="Add"
      action={handleSendWidgets}
    >
      <p className="text-sm text-black-secondary">
        Select widgets to add to your Console Home. They will be added to the
        bottom of your Console Home.
      </p>
      <div className="grid gap-4 my-4 lg:grid-cols-2">
        {widgetsToAdd.map((widget) => {
          return (
            <WidgetItem
              widget={widget}
              key={widget.id}
              handleSelect={handleSelectWidget}
              selected={Boolean(selectedWidgets[widget.type])}
            />
          );
        })}
      </div>
    </Modal>
  );
};

const WidgetItem: React.FC<{
  widget: HomeWidget;
  selected?: boolean;
  handleSelect: (widget: HomeWidget) => void;
}> = ({ widget, handleSelect, selected }) => {
  const { id, type } = widget;

  return (
    <label htmlFor={id} className="cursor-pointer">
      <Card selected={selected}>
        <CardBody>
          <div className="flex items-start justify-between">
            <div>
              <h1>{type}</h1>
              <span className="text-xs text-black-secondary">
                Quickly access your favorite services.
              </span>
              <img
                src="https://a.b.cdn.console.awsstatic.com/a/v1/S4V5AABRTEM3MY2JOC6VA7KTKEJYW3XUUGDI6FU64EBSFJXUSFTA/module-assets/dashboard-widget-favorites/favorites-gallery-overview-light.png"
                alt={type}
                className="w-[140px] h-[80px] container-shadow mt-4"
              />
            </div>
            <input
              type="checkbox"
              className="w-[14px] h-[14px]"
              id={id}
              checked={selected}
              onChange={() => {
                handleSelect(widget);
              }}
            />
          </div>
        </CardBody>
      </Card>
    </label>
  );
};

export default AddWidgetsModal;
