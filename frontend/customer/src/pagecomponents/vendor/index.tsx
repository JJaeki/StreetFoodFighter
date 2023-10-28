'use client';
import { vendordata } from '@/temp/vendordata';
import { useRouter } from 'next/navigation';
import { TopBox, StyledTop, VendorName, Review } from './Vendor.styled';

const VendorPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const index = parseInt(id, 10) - 1;
  const vendor = vendordata[index];

  const reviewImages = () => {
    const fullStars = Math.floor(vendor.review);
    const halfStar = vendor.review % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const images = [];

    for (let i = 0; i < fullStars; i++) {
      images.push(`${vendor.category}.png`);
    }

    if (halfStar) {
      images.push(`half${vendor.category}.png`);
    }

    for (let i = 0; i < emptyStars; i++) {
      images.push(`review${vendor.category}.png`);
    }

    return images;
  };

  return (
    <div>
      <TopBox>
        <StyledTop>
          <img src="/images/top/back.png" style={{ width: '40px' }} onClick={() => router.back()} />
          <VendorName>{vendor.name}</VendorName>
          <a href={`tel:${vendor.phone}`} style={{ textDecoration: 'none' }}>
            <img src="/images/vendor/phone.png" alt="Phone" style={{ width: '30px' }} />
          </a>
        </StyledTop>
        <Review>
          <div>
            {reviewImages().map((image, index) => (
              <img key={index} src={`/images/category/${image}`} alt="Review" style={{ width: '30px' }} />
            ))}
          </div>
          <div>{vendor.review}</div>
        </Review>
      </TopBox>
      <div> 메뉴/가게정보/리뷰 tab</div>
      <div> 메뉴 리스트</div>
    </div>
  );
};

export default VendorPage;
