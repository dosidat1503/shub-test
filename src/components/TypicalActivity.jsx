import React, { useRef } from "react";
import '../App.css'
import { Box, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import img1 from "../assets/typical-activities/carousel1.png";
import img2 from "../assets/typical-activities/carousel2.png";
import img3 from "../assets/typical-activities/carousel3.png";
import img4 from "../assets/typical-activities/carousel4.png";
import img5 from "../assets/typical-activities/carousel5.png";
import img6 from "../assets/typical-activities/carousel6.png";

const images = [img1, img2, img3, img4, img5, img6];

const swiperParams = {
	modules: [Navigation],
	spaceBetween: 2,
	slidesPerView: 6,
	loop: true,
	breakpoints: {
		0: { slidesPerView: 1 },
		600: { slidesPerView: 2 },
		900: { slidesPerView: 3 },
		1200: { slidesPerView: 5 },
		2000: { slidesPerView: 6 },
	},
};
  
const styles = {
	container: { position: "relative" },
	image: {
		objectFit: "cover",
		borderRadius: "16px",
		boxShadow: 3,
	},
	button: {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		borderRadius: "55%",
		minWidth: "40px",
		height: "55px",
		boxShadow: 10,
		bgcolor: "white",
		zIndex: 2,
		bgcolor: "white",
		"&:active": { bgcolor: "grey.600" },
		"&:focus": { outline: "none" }, 
		"&:focus-visible": { boxShadow: "none", outline: "none" }, 
	},
	prevButton: { left: "-10px" },
	nextButton: { right: "-10px" },
};

const Carousel = () => {
	const swiperRef = useRef(null);

	const handleNext = () => {
		swiperRef.current.swiper.slideNext();
	};

	const handlePrev = () => {
		swiperRef.current.swiper.slidePrev();
	};

	return (
		<>
			<Swiper ref={swiperRef} {...swiperParams}>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<Box
							component="img"
							src={img}
							alt={`Slide ${index}`}
							sx={{ ...styles.image, marginTop: index % 2 === 0 ? 0 : 4 }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			

			<Button onClick={handlePrev} variant="contained" sx={{ ...styles.button, ...styles.prevButton }}>
				<ArrowBackIcon sx={{ color: "black" }} />
			</Button>

			<Button onClick={handleNext} variant="contained" sx={{ ...styles.button, ...styles.nextButton }}>
				<ArrowForwardIcon sx={{ color: "black" }} />
			</Button>
		</>
	)
}

const TypicalActivity = () => {
	return (
		<Box sx={{ textAlign: "center", mt: 4 }}>
			<Typography variant="h5" fontWeight="bold">
				Hoạt động tiêu biểu từ cộng đồng giáo dục
			</Typography>
			<Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
				Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá trình giảng dạy,
				dạy học ứng dụng công nghệ SHub Classroom.
			</Typography>

			<Container maxWidth="md" sx={styles.container}>
				<Carousel />
			</Container>
		</Box>
	);
};

export default TypicalActivity;
