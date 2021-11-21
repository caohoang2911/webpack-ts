import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';
const BaseBreadCrumbs = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <Breadcrumb className="base-breadcrum">
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <Breadcrumb.Item key={key}>{name}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={key}>
            {' '}
            <Link key={key} className="underline text-blue-500" to={path}>
              {name}
            </Link>
          </Breadcrumb.Item>
        )
      )}
    </Breadcrumb>
  );
};

export default BaseBreadCrumbs;
