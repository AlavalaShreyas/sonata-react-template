const CarouselComponentSource = `
class CarouselComponentSource extends React.Component {
   render() {
    const onChangeSlide = (props) => {
        console.log(props);
      };
      return (
        <CarouselComponent
          index={0}
          data={items}
          onChangeSlide={onChangeSlide}
        />
      );
   }
}
`;
export default CarouselComponentSource;
