import { useAppSelector } from '../../state';
import Button from '../Button';
import Card, { CardBody, CardFooter, CardHeader } from '../Card';
import Icon from '../Icon';

interface Props {
  onDismiss?: () => void;
}

const Modal: React.FC<Props> = ({ onDismiss }) => {
  const { widgetsMap } = useAppSelector((state) => state.home);

  return (
    <Card className="w-full max-w-[820px]  mx-auto relative z-30 overflow-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <h4 className="text-[18px] font-semibold">Add widgets</h4>
          </div>
          <button onClick={onDismiss} type="button">
            <Icon
              type="xmark"
              className="stroke-black-secondary hover:stroke-black-primary"
            />
          </button>
        </div>
      </CardHeader>
      <CardBody className="overflow-auto max-h-[calc(100vh_-_155px)]">
        <p className="text-sm text-black-secondary">
          Select widgets to add to your Console Home. They will be added to the
          bottom of your Console Home.
        </p>
        <div className="grid gap-4 my-4">
          {Object.values(widgetsMap)
            .filter((widget) => !widget.isAdded)
            .map(({ id, title }) => {
              return (
                <label htmlFor={id} className="cursor-pointer" key={id}>
                  <Card key={id}>
                    <CardBody>
                      <div className="flex items-start justify-between">
                        <div>
                          <h1>{title}</h1>
                          <span className="text-xs text-black-secondary">
                            Quickly access your favorite services.
                          </span>
                          <img
                            src="https://a.b.cdn.console.awsstatic.com/a/v1/S4V5AABRTEM3MY2JOC6VA7KTKEJYW3XUUGDI6FU64EBSFJXUSFTA/module-assets/dashboard-widget-favorites/favorites-gallery-overview-light.png"
                            alt={title}
                            className="w-[140px] h-[80px] container-shadow mt-4"
                          />
                        </div>
                        <input
                          type="checkbox"
                          className="w-[14px] h-[14px]"
                          id={id}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </label>
              );
            })}
        </div>
      </CardBody>

      <CardFooter>
        <div className="w-full flex gap-2 justify-end">
          <Button variant="secondary" onClick={onDismiss}>
            Cancel
          </Button>
          <Button>Add</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Modal;
