import React from 'react';

const FAQPage = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold text-red-500 mb-8">Câu hỏi thường gặp</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <ul className="space-y-6">
                  
          <li className="border-b pb-4">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Bưu kiện của tôi đang ở đâu?</h2>
            <div className="text-gray-700 space-y-2">
              
              <p>Bạn có thể kiểm tra bưu kiện của bằng mã vận đơn Amamy cung cấp qua Email hoặc liên hệ trực tiếp tới Amamy để kiểm tra tình trạng bưu kiện của bạn.</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Tại sao thời gian lâu hơn dự kiến?</h2>
            <div className="text-gray-700 space-y-2">
              
              <p>Một số thời điểm quá trình kiểm tra hải quan bao gồm các thủ tục an ninh, kiểm tra mặt hàng được phép nhập cảnh lâu hơn dự kiến, điều này khiến quá trình giao hàng chậm hơn.</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Tôi có phải đóng thêm thuế không?</h2>
            <div className="text-gray-700 space-y-2">
              
              <p>Gửi hàng tại Amamy 100% bao thuế. Nếu có bất kỳ thêm chi phí nào, quý khách vui lòng liên hệ Amamy để được hoàn tiền.</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Nhận hàng ở bưu điện như thế nào?</h2>
            <div className="text-gray-700 space-y-2">
              <p>Một số bưu kiện có thể sẽ giao tại bưu điện gần nhà khách hàng, vậy nên khách hàng sẽ ra đó nhận.</p>
              <p>Lúc tới nhận yêu cầu cung cấp các giấy tờ cá nhân cho bưu điện.</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Nhận hàng bị thiếu hàng hóa?</h2>
            <div className="text-gray-700 space-y-2">
              <p>Quá trình đóng hàng minh bạch rõ ràng tại Amamy sẽ giảm thiểu hàng hóa của bạn bị thiếu hoặc mất.</p>
              <p>Nếu có xảy ra khách hàng vui lòng thông báo với VuCargo, chúng tôi luôn chịu trách nhiệm và hỗ trợ khách hàng.</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Hình thức thanh toán thế nào?</h2>
            <div className="text-gray-700 space-y-2">
              <p>Bạn có thể thanh toán bằng nhiều hình thức như tiền mặt, chuyển khoản VNĐ, EURO, USD, CAD, AUD,..</p>             
            </div>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Tại sao giao hàng không gọi điện?</h2>
            <div className="text-gray-700 space-y-2">
              <p>Một số quốc gia như Châu Âu vì tính bảo mật thông tin, vậy nên nhân viên sẽ không gọi điện thông báo trước khi đi giao mà chỉ dựa trên địa chỉ nhà và tên trước cửa nhà.</p>             
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQPage;
