import stockImage from "../assets/stock.jpg";
import deliveryManImage from "../assets/delivery-man.jpg";
import containerImage from "../assets/container.jpg";

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  content: string;
  slug: string;
}

export const articles: BlogPost[] = [
//   {
//     id: 1,
//     title: "Làm sao để chuyển hàng từ Đức về Việt Nam tiết kiệm nhất?",
//     date: "November 22, 2023",
//     author: "Admin",
//     image: stockImage,
//     slug: "chuyen-hang-tu-duc-ve-viet-nam-tiet-kiem-nhat",
//     content: `Chuyển hàng từ Đức về Việt Nam là nhu cầu ngày càng phổ biến của nhiều người Việt sinh sống và làm việc tại Đức. Tuy nhiên, làm sao để chuyển hàng một cách tiết kiệm và an toàn là điều mà nhiều người quan tâm.

// Trong bài viết này, chúng tôi sẽ chia sẻ những kinh nghiệm và mẹo hữu ích giúp bạn tiết kiệm chi phí khi gửi hàng từ Đức về Việt Nam.

// Đầu tiên, bạn nên tìm hiểu kỹ về các hình thức vận chuyển khác nhau như đường biển, đường hàng không, và dịch vụ chuyển phát nhanh. Mỗi phương thức đều có ưu và nhược điểm riêng về thời gian và chi phí.

// Ngoài ra, việc đóng gói hàng hóa đúng cách cũng rất quan trọng để tránh hư hỏng và tiết kiệm không gian vận chuyển.`,
//   },


//   {
//     id: 2,
//     title: "Rủi ro và cách xử lý khi gửi hàng từ Đức về Việt Nam",
//     date: "November 22, 2023",
//     author: "Admin",
//     image: deliveryManImage,
//     slug: "rui-ro-va-cach-xu-ly-khi-gui-hang-tu-duc-ve-viet-nam",
//     content: `Gửi hàng quốc tế luôn tiềm ẩn những rủi ro nhất định. Bài viết này sẽ giúp bạn hiểu rõ về các rủi ro có thể gặp phải và cách phòng tránh khi gửi hàng từ Đức về Việt Nam.

// Một số rủi ro phổ biến bao gồm: hàng hóa bị hư hỏng trong quá trình vận chuyển, thất lạc hàng, chậm trễ thời gian giao hàng, và các vấn đề về thủ tục hải quan.

// Để giảm thiểu rủi ro, bạn nên lựa chọn đơn vị vận chuyển uy tín, đóng gói hàng hóa cẩn thận, và mua bảo hiểm hàng hóa khi cần thiết.

// Đặc biệt, việc nắm rõ các quy định về hàng hóa cấm và hạn chế là rất quan trọng để tránh các rắc rối với hải quan.`,
//   },


  {
    id: 3,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
  {
    id: 4,
    title: "Mua hàng hộ tại các nước EU nhanh gọn, tiết kiệm nhất",
    date: "November 22, 2023",
    author: "Admin",
    image: containerImage,
    slug: "mua-hang-ho-tai-cac-nuoc-eu-nhanh-gon-tiet-kiem-nhat",
    content: `Dịch vụ mua hàng hộ tại các nước EU đang ngày càng phát triển, giúp người Việt Nam dễ dàng tiếp cận với các sản phẩm chất lượng từ châu Âu.

Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và sử dụng dịch vụ mua hàng hộ một cách hiệu quả nhất. Từ việc chọn sản phẩm, so sánh giá cả, đến các bước đặt hàng và theo dõi đơn hàng.

Chúng tôi cũng sẽ chia sẻ những mẹo giúp bạn tiết kiệm chi phí vận chuyển và tránh những rủi ro không đáng có khi mua hàng từ xa.

Ngoài ra, bạn sẽ được tư vấn về cách tính toán chi phí tổng thể, bao gồm giá sản phẩm, phí vận chuyển, thuế và các chi phí phát sinh khác.`,
  },
];

export function getArticleBySlug(slug: string): BlogPost | undefined {
  return articles.find(article => article.slug === slug);
}
