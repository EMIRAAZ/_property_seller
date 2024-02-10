import './blog.scss';
import Header from '../../../components/newHeader';
import { useEffect } from 'react';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({ id, updatedAt, title, image, description }) => {
  let navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/viewblog/${id}`);
  };

  return (
    <div className="blog-card-container" onClick={navigateTo}>
       <div className="blog-card-image-container">
      <img className="blog-main-image rounded" src={image} alt="blog" />
    </div>
      <div className="blog-desciption">
        <div className="blog-content">
          <h1 className="blog-heading">{title}</h1>
          <p className="blog-description">{description}</p>
        </div>
        <div className="blog-button">
          <button>Readme</button>
        </div>
      </div>
   
    </div>
  );
};

const Blog = props => {
  useEffect(() => {
    props.getBlogWeb();
  }, []);

  const renderCard = () =>
    props.blogs.map((item, i) => <BlogCard key={i} {...item} />);

  return (
    <>
      <div className="blog-container">
        <Header />
        <div className="daily-blog mb-10">
          <div className="heading-bt-container j">
            <h1 className='text-[65px]'>Blogs</h1>
            {/* <button>View all</button> */}
          </div>
          <div className="blog-card-main-container">

          {renderCard()}
          </div>
        </div>
        {/* <SocialPanel /> */}
        <MoveToTop />

        <FooterNew />
      </div>
    </>
  );
};

export default Blog;
