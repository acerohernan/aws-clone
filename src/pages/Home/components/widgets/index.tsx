import Widget from '../Widget';

export const widgetsMap: Record<string, React.ReactElement> = {
  'recently-visited': (
    <Widget title="Recently visited" addInfoLink footer="View all services" />
  ),
  'aws-welcome': <Widget title="Welcome to AWS" addInfoLink={false} />,
  'aws-health': (
    <Widget title="AWS Health" addInfoLink footer="Go to AWS Health" />
  ),
  'const-and-usage': <Widget title="Cost and usage" addInfoLink />,
  'build-a-solution': <Widget title="Build a solution" addInfoLink />,
  'trusted-advisor': (
    <Widget
      title="Trusted Advisor"
      addInfoLink
      footer="Go to Trusted Advisor"
    />
  ),
  'explore-aws': <Widget title="Explore AWS" addInfoLink />,
  'latest-announcements': <Widget title="Latest announcements" addInfoLink />,
  'recent-posts': <Widget title="Recent AWS blog posts" addInfoLink />,
  applications: (
    <Widget
      title="Applications"
      addInfoLink
      footer="Go to Application Manager"
    />
  ),
  'security-hub': (
    <Widget title="Security Hub" addInfoLink footer="Go to Security Hub" />
  ),
  favorites: <Widget title="Favorites" addInfoLink />,
  'managed-instances': (
    <Widget
      title="Managed instances"
      addInfoLink
      footer="Go to System Manager"
    />
  ),
  'ops-summary': (
    <Widget title="Ops summary" addInfoLink footer="Go to OpsCenter" />
  ),
  'patch-compliance': (
    <Widget title="Patch compliance" addInfoLink footer="Go to Patch Manager" />
  ),
};
