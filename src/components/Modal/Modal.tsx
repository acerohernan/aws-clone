import Button from '../Button';
import Card, { CardBody, CardFooter, CardHeader } from '../Card';
import Icon from '../Icon';

interface Props {
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ closeModal }) => {
  return (
    <Card className="w-full max-w-[820px] mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <h4 className="text-[18px] font-semibold">Add widgets</h4>
          </div>
          <button onClick={closeModal}>
            <Icon
              type="xmark"
              className="stroke-black-secondary hover:stroke-black-primary"
            />
          </button>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-black-secondary">
          Select widgets to add to your Console Home. They will be added to the
          bottom of your Console Home.
        </p>
        <div className="w-full h-[500px]" />
      </CardBody>

      <CardFooter>
        <div className="w-full flex gap-2 justify-end">
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button>Add</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Modal;
