import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktopLG: {
    breakpoint: { max: 5000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tabletMD: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobileSM: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ReviewSlider = () => {
  const reviews = [
    {
      image: "/images/user1.jpg",
      name: "Budi Santoso",
      review:
        "Saya sangat puas dengan layanan pemesanan liburan di website ini. Prosesnya sangat mudah dan cepat. Hotel yang direkomendasikan juga sangat nyaman dan bersih. Liburan saya di Bali menjadi sangat menyenangkan berkat layanan ini. Pasti akan menggunakan lagi di masa depan!",
    },
    {
      image: "/images/user2.jpg",
      name: "Siti Nurhaliza",
      review:
        "Pengalaman liburan yang luar biasa! Website ini benar-benar membantu saya menemukan penginapan yang sempurna di Lombok. Deskripsi dan foto yang akurat membuat saya yakin dalam memilih hotel. Pelayanannya juga sangat memuaskan, mulai dari booking hingga check-out. Terima kasih!",
    },
    {
      image: "/images/user3.jpg",
      name: "Ahmad Fauzi",
      review:
        "Liburan ke Pulau Komodo menjadi pengalaman yang tak terlupakan berkat website ini. Informasi yang diberikan sangat lengkap dan memudahkan saya dalam membuat rencana perjalanan. Meskipun ada sedikit kendala saat check-in di hotel, tim layanan pelanggan sangat responsif dan membantu. Sangat direkomendasikan!",
    },
    {
      image: "/images/user4.jpg",
      name: "Maria Agustina",
      review:
        "Website ini memudahkan proses pencarian dan pemesanan liburan. Saya memesan liburan ke Pulau Seribu dan semuanya berjalan lancar. Hotel yang saya pilih sangat sesuai dengan ekspektasi saya. Mungkin bisa menambahkan lebih banyak pilihan aktivitas di sekitar lokasi wisata. Overall, sangat puas!",
    },
  ];

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {reviews.map((review, index) => (
        <ClientReview key={index} image={review.image} name={review.name}>
          {review.review}
        </ClientReview>
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
