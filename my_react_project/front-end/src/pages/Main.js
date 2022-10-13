import { StyledSwiper } from "../styles/MainStyle";
import { useNavigate } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
    const nav = useNavigate();

    return (
        <StyledSwiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            <SwiperSlide
                onClick={() => {
                    nav("/package");
                }}
            >
                slide 1
            </SwiperSlide>
            <SwiperSlide
                onClick={() => {
                    nav("/air");
                }}
            >
                slide 2
            </SwiperSlide>
            <SwiperSlide
                onClick={() => {
                    nav("/hotel");
                }}
            >
                slide 3
            </SwiperSlide>
        </StyledSwiper>
    );
};

export default Main;
