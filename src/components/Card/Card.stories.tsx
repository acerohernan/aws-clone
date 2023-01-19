import { Meta } from '@storybook/react';
import Card, {
  CardBody,
  CardBodySection,
  CardFooter,
  CardHeader,
} from './Card';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

export const Default = () => {
  return (
    <Card>
      <CardHeader>
        <div className="text-center">Header</div>
      </CardHeader>
      <CardBody>
        {/* <div className="h-28 grid items-center justify-center">Body</div> */}
        <CardBodySection>
          <span className="my-5 block">Section1</span>
        </CardBodySection>
        <CardBodySection isLast>
          <span className="my-5 block">Section2</span>
        </CardBodySection>
      </CardBody>
      <CardFooter>
        <div className="text-center">Footer</div>
      </CardFooter>
    </Card>
  );
};

export const WithoutFooter = () => {
  return (
    <Card>
      <CardHeader>
        <div className="text-center">Header</div>
      </CardHeader>
      <CardBody>
        <CardBodySection>
          <span className="my-5 block">Section1</span>
        </CardBodySection>
        <CardBodySection isLast>
          <span className="my-5 block">Section2</span>
        </CardBodySection>
      </CardBody>
    </Card>
  );
};
