import { Image } from "./image";
import '../assets/css/course.css'

export const Courses = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Khám phá khóa học</h2>
        </div>
        <div className="row">
            <div className="search">
              <input type="text" className="searchTerm" placeholder="Tìm kiếm ..." />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                {' '}
                <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                <h3>{d.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: d.courseDescription }} />
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
