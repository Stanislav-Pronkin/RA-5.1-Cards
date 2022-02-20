import Card from './Card';

export default function CardList(props) {
    const { cards } = props;

    return (
        <div className='card-list'>
            {cards.map((item, index) => <Card key={index} prop={item} >
            <div className='card-body'>
                {item.img && <img src={item.img} className='card-img' alt={item.title} />}
                <h5 className='card-title'>{item.title}</h5>
                <p className='card-text'>{item.text}</p>
                <a href='#' className='btn card-btn'>{item.btn}</a>
            </div>
            </Card>)}
        </div>
    )
}