import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { HomeWidget } from '../../../../../api/user/types';
import Modal from '../../../../../components/Modal';
import { ModalInheritProps } from '../../../../../components/Modal/types';
import { allWidgets } from '../../../constants/widgets';
import { useWidgetsMutation } from '../../../hooks/useWidgets';

interface Props extends ModalInheritProps {}

const ResetWidgetsModal: React.FC<Props> = ({ onDismiss }) => {
  const queryClient = useQueryClient();
  const widgetsMutation = useWidgetsMutation();

  const defaultWidgets = useMemo<Array<HomeWidget>>(() => {
    return Object.values(allWidgets).filter((_, index) => index < 11);
  }, []);

  const handleDefaultWidgets = useCallback(async () => {
    queryClient.setQueriesData(['user/home/widgets'], defaultWidgets);
    widgetsMutation.mutate(defaultWidgets);
    onDismiss && onDismiss();
  }, []);

  return (
    <Modal
      onDismiss={onDismiss}
      title="Reset to default layout"
      actionText="Reset"
      action={handleDefaultWidgets}
    >
      <p className="text-sm text-black-secondary">
        You will lose your customizations when you reset the layout.
      </p>
    </Modal>
  );
};

export default ResetWidgetsModal;
