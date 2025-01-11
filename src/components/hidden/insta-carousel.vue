<template>
    <div class="carousel-container">
        <swiper :slides-per-view="1" :space-between="30" :loop="true" class="mySwiper">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="slide-content">
                    <img :src="getImage(slide.img)" :alt="slide.name" class="carousel-image">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            slides: [
                { img: 'bday.png', name: 'Birthday (10/12/2002)' },
                { img: 'rizzler.png', name: 'How is it?' },
                { img: 'cringe.png', name: 'Cringe, right?' },
                { img: 'gotosite.png', name: 'Go to Site' },
            ],
        };
    },
    methods: {
        getImage(img) {
            return `/assets/slides/${img}`;
        },
    },
};
</script>

<style scoped>
.carousel-container {
    width: 300px;
    height: 200px;
    margin: auto;
    @apply my-8 md:w-[500px] md:h-[400px] rounded-2xl;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 230px;
    @apply md:h-[350px] rounded-lg;
}


.carousel-image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    @apply rounded-xl
}
</style>
