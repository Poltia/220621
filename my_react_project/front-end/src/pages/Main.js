import { React } from "react";
import {
    StyledSwiper,
    Jeju,
    Yang,
    Air,
    Move,
    Jejutel,
    Yangtel,
    SlideWrap,
    LeftText,
    RightText,
} from "../styles/MainStyle";
import { useNavigate } from "react-router-dom";
// images
import { air, move, jeju_tel, jeju, yang, yang_tel } from "../imgs";
// swiper
import { SwiperSlide } from "swiper/react";
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
            autoplay={{ delay: 2500 }}
        >
            <SwiperSlide>
                <SlideWrap>
                    <Jeju
                        src={jeju}
                        alt="jeju"
                        onClick={() => {
                            nav("/jejupackage");
                        }}
                    />
                    <LeftText>귤따러 제주 패키지</LeftText>
                    <Yang
                        src={yang}
                        alt="yangyang"
                        onClick={() => {
                            nav("/yangpackage");
                        }}
                    />
                    <RightText>바다보러 양양 패키지</RightText>
                </SlideWrap>
            </SwiperSlide>
            <SwiperSlide>
                <SlideWrap
                    onClick={() => {
                        nav("/air");
                    }}
                >
                    <Air src={air} alt="air" />
                    <LeftText>항공 예약 하기</LeftText>
                    <Move src={move} alt="move" />
                    <RightText>편하게 모셔드립니다</RightText>
                </SlideWrap>
            </SwiperSlide>
            <SwiperSlide>
                <SlideWrap
                    onClick={() => {
                        nav("/hotel");
                    }}
                >
                    <Jejutel src={jeju_tel} alt="jeju_tel" />
                    <LeftText>숙소 예약 하기</LeftText>
                    <Yangtel src={yang_tel} alt="yang_tel" />
                    <RightText>아침에는 다른사람 주의</RightText>
                </SlideWrap>
            </SwiperSlide>
        </StyledSwiper>
    );
};

export default Main;
