import Slider from 'react-slick';
import HomeSlider from './PosterSliderConfig';
import BookCard from './BookCard';

const HomePageCarousel =()=>{
  const obj=[{
    _id:1,
    image:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/268/9789390166268.jpg",
    title:"Philosofy of mind",
    description:"Its a book based on mind relation",
    price:"150"  
  },
  {
    _id:2,
    image:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/268/9789390166268.jpg",
    title:"Philosofy of mind",
    description:"Its a book based on mind relation",
    price:"150"  
  },
  {
    _id:3,
    image:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/268/9789390166268.jpg",
    title:"Philosofy of mind",
    description:"Its a book based on mind relation",
    price:"150"  
  },
  {
    _id:4,
    image:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/268/9789390166268.jpg",
    title:"Philosofy of mind",
    description:"Its a book based on mind relation",
    price:"150"  
  },
  {
    _id:5,
    image:"https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/268/9789390166268.jpg",
    title:"Philosofy of mind",
    description:"Its a book based on mind relation",
    price:"150"  
  },

]

    return <>
     <Slider {...HomeSlider}>
     {obj.map((eachObj)=> <BookCard {...eachObj} key={obj._id}/>)
        }
        </Slider>
    </>
};

export default HomePageCarousel;