import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { title, image_url, details, _id } = news
    return (
        <div className=''>
            <div className="card w-full bg-base-100 mb-6">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 150
                            ?
                            <p>{details.slice(0, 150)}. <Link to={`/news/${_id}`} className='text-blue-500 font-semibold'>read more....</Link></p>
                            :
                            <p>{details}</p>
                    }

                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
};

export default NewsCard;