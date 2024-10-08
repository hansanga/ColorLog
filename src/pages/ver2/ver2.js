import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  // AppContainer,
  ColorlogContainer,
  Header,
  ColorInfo,
  ProfileImage,
  Options,
  OptionItem,
  Palette,
  BestColor,
  ColorCircles,
  Circle,
  Celebrities,
  CelebrityImages,
  CosmeticsList,
  ListItem,
  CosmeticsSpan,
  ProductImage,
  ProductInfo,
  BrandAndName,
  Brand,
  LineBelowCircles,
  GlobalStyle,
} from "./style";
import BackImg from "../../images/back_summer.png";
import Face from "../../images/face.png";
import SumFace1 from "../../images/sum_face11.png";
import SumFace2 from "../../images/sum_face22.png";
import SumFace3 from "../../images/sum_face33.png";
import Image from "../../icons/IconImage.png";
import Video from "../../icons/IconVideo.png";
import SumLip1 from "../../images/sum_lip1.png"; // 이미지 파일 추가
import SumLip2 from "../../images/sum_lip2.png"; // 이미지 파일 추가
import SumLip3 from "../../images/sum_lip3.png"; // 이미지 파일 추가
import Ex1 from "../../images/ex1.png"; // 이미지 파일 추가

const Colorlog = () => {
  const { userId } = useParams();
  //const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [resultImagePath, setResultImagePath] = useState("");
  const [facePaletteImagePath, setFacePaletteImagePath] = useState("");
  const [mediaUrls, setMediaUrls] = useState({ imagePath: "", videoPath: "" });

  const cosmeticsData = [
    {
      id: 1,
      brand: "3CE ",
      name: "- 벨벳 립틴트",
      description: "#GO NOW",
      image: SumLip1, // 이미지 추가
    },
    {
      id: 2,
      brand: "peripera ",
      name: "- 워터베어틴트",
      description: "7호 쿨롱도원",
      image: SumLip2, // 이미지 추가
    },
    {
      id: 3,
      brand: "ramand ",
      name: "- 쥬시래스팅틴트",
      description: "25호 베어그레이프",
      image: SumLip3, // 이미지 추가
    },
  ];

  // useEffect(() => {
  //   // meta 태그 추가 - viewport-fit=cover 설정으로 전체 화면 덮도록 설정
  //   const metaTag = document.createElement("meta");
  //   metaTag.name = "viewport";
  //   metaTag.content =
  //     "width=device-width, initial-scale=1.0, viewport-fit=cover";
  //   document.head.appendChild(metaTag);

  //   // iOS에서 Safari 상태바 처리
  //   const appleStatusBarMetaTag = document.createElement("meta");
  //   appleStatusBarMetaTag.name = "apple-mobile-web-app-status-bar-style";
  //   appleStatusBarMetaTag.content = "black-translucent"; // 상태바 투명하게 설정
  //   document.head.appendChild(appleStatusBarMetaTag);
  // }, []);

  return (
    // <AppContainer>
    <ColorlogContainer style={{ backgroundColor: "#ffffff" }}>
      <Header>
        <GlobalStyle />
        <h1>colorlog</h1>
      </Header>

      <ColorInfo $backImg={BackImg}>
        <h2>당신의 컬러:</h2>
        <h1>여름쿨톤</h1>
        <ProfileImage src={Face} alt="Color Tone" />
        <Options>
          <OptionItem $image={Image}>
            <a href="/path1">
              <span>네컷 저장</span>
            </a>
          </OptionItem>
          <OptionItem $video={Video}>
            <a href="/path2">
              <span>동영상 저장</span>
            </a>
          </OptionItem>
        </Options>
      </ColorInfo>

      <Palette>
        <h3>face palette</h3>
        <img src={Ex1} alt="Face palette image" style={{ width: "55vw" }} />
        <p>얼굴에서 추출된 색상 팔레트입니다.</p>
      </Palette>

      <BestColor>
        <h3>best color</h3>
        <ColorCircles>
          <Circle bgColor="#9EA8FF" />
          <Circle bgColor="#03006B" />
          <Circle bgColor="#520080" />
          <Circle bgColor="#6A1F2B" />
          <Circle bgColor="#2F6C73" />
          <Circle bgColor="#234724" />
        </ColorCircles>
        <LineBelowCircles />
      </BestColor>

      <Celebrities>
        <p>여름 쿨톤의 대표적인 연예인으로는</p>
        <p>
          {" "}
          <strong>아이린</strong>님, <strong>김태리</strong>님,{" "}
          <strong>정채연</strong>님이 있습니다.
        </p>
        <CelebrityImages>
          <img src={SumFace1} alt="Celebrity 1" />
          <img src={SumFace2} alt="Celebrity 2" />
          <img src={SumFace3} alt="Celebrity 3" />
        </CelebrityImages>
      </Celebrities>

      <CosmeticsList>
        <GlobalStyle />
        <h3>Cosmetics List</h3>
        <ul>
          {cosmeticsData.map((item) => (
            <ListItem key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductInfo>
                <BrandAndName>
                  <GlobalStyle />
                  <Brand>{item.brand}</Brand>
                  <span>{item.name}</span>
                </BrandAndName>
                <CosmeticsSpan>{item.description}</CosmeticsSpan>
              </ProductInfo>
            </ListItem>
          ))}
        </ul>
      </CosmeticsList>
    </ColorlogContainer>
    // </AppContainer>
  );
};

export default Colorlog;
