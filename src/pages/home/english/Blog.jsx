import "./blog.css"
import { useNavigate } from "react-router-dom";

const Blog = ({ id, updatedAt, title, image, description }) => {
    let navigate = useNavigate();
  
    const navigateTo = () => {
      navigate(`/viewblog/${id}`);
    };
  
    return (
      <div className="blog-card-container pt-2" onClick={navigateTo}>
         <div className="blog-card-image-container">
        <img className="blog-main-image rounded" src={image} alt="blog" />
      </div>
        <div className="blog-desciption">
          <div className="blog-content">
            <h1 className="blog-heading">{title}</h1>
            <p className="blog-description overflow-hidden">{description}</p>
          </div>
          <div className="blog-button">
            <button>Readme</button>
          </div>
        </div>
     
      </div>
    );
  };

  export default Blog