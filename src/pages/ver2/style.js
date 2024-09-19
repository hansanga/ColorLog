import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

  body {
    font-family: 'Nanum Gothic', sans-serif;
  }
`;

// Main container
export const ColorlogContainer = styled.div`
  font-family: "Arial", sans-serif;
  text-align: center;
  color: #333;
`;

// Header styling
export const Header = styled.header`
  background-color: white;
  padding: 30px;
  padding-top: 0;

  h1 {
    font-size: 2rem;
    padding: 40px 0 10px 0;
    margin: 0;
    box-shadow: 0px 4px 4px 3px rgba(152, 152, 152, 0.25);
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

// Color information section
export const ColorInfo = styled.section`
  background-image: ${({ $backImg }) => `url('${$backImg}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 10px;
  margin-top: 30px;
  height: 500px;
  width: 100%;
  h2 {
    margin: 10px;
    color: #ffffff;
    font-size: 30px;
  }
  h1 {
    margin: 10px;
    color: #a3cbf0;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 50px;
  }
`;

// Profile image styling
export const ProfileImage = styled.img`
  width: 150px;
  height: auto;
  margin-top: 20px;
`;

// Options section
export const Options = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 20px;
  background-color: rgba(70, 110, 148, 0.5);
`;

export const OptionItem = styled.li`
  position: relative;
  text-align: center;
  width: 100px; /* 너비는 필요에 맞게 조정 */

  a {
    display: block;
    text-decoration: none;
    color: #333; /* 텍스트 색상 */
  }

  a:before {
    content: "";
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 48px;
    height: 48px;
    margin: 0 auto;
  }

  &:nth-of-type(1) a:before {
    background-image: ${({ $image }) => `url('${$image}')`};
  }

  &:nth-of-type(2) a:before {
    background-image: ${({ $video }) => `url('${$video}')`};
  }

  span {
    display: block;
    color: #ffffff;
    font-size: 14px;
    margin-top: 10px;
  }
`;

// Palette section
export const Palette = styled.section`
  background-color: #ffffff;
  padding: 20px;
  h3 {
    font-size: 30px;
  }
`;

// Color block for palette
export const ColorBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
`;

// Best color section
export const BestColor = styled.section`
  background-color: white;
  padding: 20px;

  h3 {
    font-size: 30px;
  }
`;

// Best color circles container
export const ColorCircles = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

export const LineBelowCircles = styled.div`
  width: 80vw;
  height: 3px;
  background-color: lightgray;
  margin: 50px auto 0 auto;
  box-shadow: 0px 4.4px 2.2px rgba(134, 134, 134, 0.25);
`;

// Individual circle for best colors
export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

// Celebrities section
export const Celebrities = styled.section`
  padding-top: 20px;
  width: 100%;
`;

// Celebrity images container
export const CelebrityImages = styled.div`
  background-color: #a3cbf0;
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  img {
    width: 30%; /* 이미지 너비를 30%로 설정하여 3개가 한 줄에 나오도록 */
    max-width: 200px; /* 최대 너비를 제한 */
    height: auto; /* 비율을 유지하면서 크기 조정 */
    object-fit: contain; /* 비율을 유지하며 이미지가 잘리지 않도록 */
  }
`;

// CosmeticsList section
export const CosmeticsList = styled.section`
  background-color: white;
  padding-top: 20px;

  h3 {
    position: relative;
    font-size: 30px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    &::after {
      content: "";
      display: block;
      width: 80vw;
      height: 2px; /* 선의 두께 */
      background-color: lightgray; /* 선의 색상 */
      margin: 30px auto 0 auto;
      box-shadow: 0px 4.4px 2.2px rgba(134, 134, 134, 0.25); /* 그림자 추가 */
    }
  }

  ul {
    padding: 0 !important;
    margin: 0 !important;
    list-style-type: none !important;
  }
`;

// Individual list item for cosmetics
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  margin: 40px auto;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 2.2px 4.4px 2.2px rgba(134, 134, 134, 0.25);
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 80vw;
`;

// Span for cosmetics details
export const CosmeticsSpan = styled.span`
  font-weight: light;
`;

// Product image on the left
export const ProductImage = styled.img`
  margin: 10px 20px 0 20px;
  margin-bottom: 0;
  padding: 0;
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-right: 20px;
`;

// Container for product info (name and description)
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  flex: 1;
`;

// Flex container for brand and name
export const BrandAndName = styled.div`
  display: flex;
  align-items: center; /* brand와 name을 같은 줄에 정렬 */
  gap: 8px; /* brand와 name 사이에 간격 추가 */
  padding-bottom: 10px;
`;

// Brand (bold 스타일 적용)
export const Brand = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 10px; /* brand와 name 사이에 간격 */
  color: #333;
`;

// Product name (aligned to the top-right)

// export const ProductName = styled.h3`
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin: 0;
//   color: #333;
// `;

// // Description (aligned to the bottom-right)
// export const ProductDescription = styled.p`
//   font-size: 1rem;
//   margin: 0;
//   color: #555;
//   align-self: flex-end; /* Aligns the description to the bottom-right */
// `;