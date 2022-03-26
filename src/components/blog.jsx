import React from 'react';

export const Blog = (props) => {
  return (
    <div id='blog' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Blog</h2>
          <p>
            Chia sẽ hiểu biết về vẽ tranh cho trẻ
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4' onClick={() => alert(10)}>
                  {' '}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
