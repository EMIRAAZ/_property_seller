import "./blog.css"
import { useNavigate } from "react-router-dom";

const Blog = ({ id, updatedAt, title, image, description }) => {
    let navigate = useNavigate();
  
    const navigateTo = () => {
      navigate(`/viewblog/${id}`);
    };
  
    return (
      // <div className="blog-card-container pt-2" onClick={navigateTo}>
      //    <div className="blog-card-image-container">
      //   <img className="blog-main-image rounded" src={image} alt="blog" />
      // </div>
      //   <div className="blog-desciption">
      //     <div className="blog-content">
      //       <h1 className="blog-heading">{title}</h1>
      //       <p className="blog-description overflow-hidden">{description}</p>
      //     </div>
      //     <div className="blog-button">
      //       <button>Readme</button>
      //     </div>
      //   </div>
     
      // </div>
      <div className=" rounded-20px pt-5 pb-4 my-4 flex flex-col px-5 max-w-[350px] h-[420px] w-full" style={{border:"1px solid rgba(210, 210, 210, 1)"}}>
        <div className="w-full h-[200px] rounded-10px overflow-hidden m-auto">
          <img src={image} className="w-full h-full object-cover" alt="blog" loading="lazy" />
        </div>
        {/* <div className="">
          <h1 className="blog-heading">{title}</h1>

        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, esse.</p>
        </div>
        <div className="">
          <button>keep reading</button>
        </div> */}
         <div className="blog-desciption">
           <div className="blog-content">
             <h1 className="blog-heading mt-4">{title}</h1>
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