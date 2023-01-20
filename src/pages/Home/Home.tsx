import { memo } from 'react';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Message from '../../components/Message';
import Modal from '../../components/Modal';
import useModal from '../../components/Modal/useModal';
import { useAppSelector } from '../../state';
import Widget from './components/Widget';

const HomePage = () => {
  const [onPresentModalWidget] = useModal(<Modal />, true);
  const { widgetsMap } = useAppSelector((state) => state.home);

  return (
    <div className="py-4 px-2 sm:px-0">
      <div className="max-w-[450px] lg:max-w-[800px] xl:max-w-[1200px] m-auto">
        <div className="lg:flex items-center justify-between">
          <div className="flex items-end gap-2">
            <h1 className="font-normal text-[28px]">Console Home</h1>
            <Link bold className="mb-[6px] text-[12px]">
              Info
            </Link>
          </div>
          <div className="xs:flex gap-2 mt-4 mb-6">
            <Button variant="secondary" className="mb-2 xs:mb-0">
              Reset to default layout
            </Button>
            <Button
              variant="primary"
              iconStart="plus"
              onClick={onPresentModalWidget}
            >
              Add widgets
            </Button>
          </div>
        </div>
        <Message>
          <div className="lg:flex items-center justify-between gap-2">
            <span className="text-sm">
              Introducing the new Managed instances, Ops summary, and Patch
              compliance widgets.
            </span>
            <Button variant="secondary" className="mt-2 lg:mt-0">
              View new widgets
            </Button>
          </div>
        </Message>
        <div className="my-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {/* <Widget
            title="Recently visited"
            footer="View all services"
            addInfoLink
            className="lg:col-span-2"
          >
            {services.map(({ name, imageUrl }, index) => {
              return (
                <WidgetSection
                  key={index}
                  isLast={index === services.length - 1}
                >
                  <div className="py-2 flex items-center gap-4">
                    <img alt={name} src={imageUrl} />
                    <Link>{name}</Link>
                  </div>
                </WidgetSection>
              );
            })}
          </Widget>

          <Widget title="Welcome to AWS">
            {steps.map(({ title, description }, index) => {
              return (
                <WidgetSection key={index} isLast={index === steps.length - 1}>
                  <div className="py-4 grid grid-cols-[76px_1fr]">
                    <div />
                    <div>
                      <Link className="flex items-center gap-1 mb-1" size="md">
                        <span>{title}</span>
                        <Icon
                          type="outside"
                          className="stroke-skyblue-primary"
                        />
                      </Link>
                      <p className="text-sm text-black-secondary">
                        {description}
                      </p>
                    </div>
                  </div>
                </WidgetSection>
              );
            })}
          </Widget>

          <Widget title="AWS Health" addInfoLink footer="Go to AWS Health">
            {healthStats.map(({ dateInString, quantity, type }, index) => {
              return (
                <WidgetSection className="mb-4" key={index}>
                  <div className="pb-1">
                    <span className="text-black-secondary text-sm">{type}</span>
                    <div className="flex items-end justify-between">
                      <span className="text-[28px]">{quantity}</span>
                      <span className="text-black-secondary text-sm">
                        {dateInString}
                      </span>
                    </div>
                  </div>
                </WidgetSection>
              );
            })}
          </Widget>

          <Widget
            title="Cost and usage"
            addInfoLink
            footer="Go to AWS Cost Management"
            className="lg:col-span-2"
          />
          <Widget
            title="Build a solution"
            addInfoLink
            className="lg:col-span-2"
          />
          <Widget
            title="Trusted Advisor"
            addInfoLink
            footer="Go to Trusted Advisor"
          />
          <Widget title="Explore AWS" addInfoLink />
          <Widget title="Latest announcements" addInfoLink />
          <Widget
            title="Recent AWS blog posts"
            addInfoLink
            footer="View all blog posts"
          />
          <Widget
            title="Applications"
            addInfoLink
            className="lg:col-span-2"
            footer="Go to Application Manager"
          />
          <Widget
            title="Security Hub"
            addInfoLink
            footer="Go to Security Hub"
          /> */}
          {Object.values(widgetsMap)
            .filter((widget) => widget.isAdded)
            .map(({ title, infoLink, footer, big, id }) => {
              return (
                <Widget
                  key={id}
                  title={title}
                  addInfoLink={infoLink}
                  footer={footer || ''}
                  className={`${big ? 'lg:col-span-2' : ''}`}
                />
              );
            })}
        </div>
        <div className="flex justify-between items-center pt-[16px]">
          <div className="flex flex-col lg:gap-1 lg:flex-row">
            <Link>Want to see another widget?</Link>
            <Link>Tell us!</Link>
          </div>
          <Button
            iconStart="plus"
            variant="secondary"
            onClick={onPresentModalWidget}
          >
            Add widgets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
