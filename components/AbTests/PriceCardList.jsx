import PriceCard from './PriceCard';

const PriceCardList = ({ priceCards }) => {
  return (
    <section className='mx-auto max-w-[80%] my-10'>
    <div className='flex justify-center'>
      {priceCards &&
        priceCards.map((card, index) => {
          return <PriceCard planType={card.planType} price={card.price} features={card.features} key={`${index}-card-price`}/>;
        })}
    </div>
    </section>
  );
};

export default PriceCardList;
