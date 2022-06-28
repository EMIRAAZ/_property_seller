import './homeproperty.scss';
import Property from '../../../components/property';
import Pagination from '../../../components/pagination';
import BasicButton from '../../../components/button/BasicButton';
import { useEffect, useState } from 'react';

const HomeProperty = ({ property, onChangePage, getProperty }) => {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    getProperty();
  }, []);

  const setCurrentPage = () => {
    if (current * 6 < property.count) {
      setCurrent(current + 1);
      onChangeCurrentPage(current + 1);
    }
  };

  const renderProperty = () =>
    property.property.map(item => <Property key={item.id} {...item} />);

  const renderPropertyHeader = () => {
    if (property.property && property.property.length > 0)
      return (
        <>
          <p className="heading">Properties</p>
          <p className="sub">{property.count} Properties found</p>
        </>
      );
    else return null;
  };
  const onChangeCurrentPage = current => {
    const offset = 6 * current - 6 > 0 ? 6 * current - 6 : 0;
    onChangePage(current, getProperty(`${property.params}&offset=${offset}`));
  };

  const bgColor = () => {
    if (property.property && property.property.length > 0) {
      return '#eef7ff';
    } else return '#ffffff';
  };

  return (
    <div className="home-property" style={{ backgroundColor: bgColor() }}>
      <div className="home-property-content">
        {renderPropertyHeader()}
        <div className="property-list-container">{renderProperty()}</div>
      </div>
      {/* <Pagination
        count={property.count}
        onChange={current => onChangeCurrentPage(current)}
      /> */}
      {
        <BasicButton customClass="view-all-home-btn" onClick={setCurrentPage}>
          View All
        </BasicButton>
      }
    </div>
  );
};

export default HomeProperty;
