import React from "react";
import "./Home.css"; // นำเข้าไฟล์ CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Container หลักสำหรับเนื้อหา */}
      <div className="home-content">
        <h2 className="home-title">สิ่งที่สาขาสอน</h2>
        
        <div className="home-info-container">
          <div className="info-item">
            <h3 className="info-title">การพัฒนาเว็บไซต์</h3>
            <p className="info-description">เราสอนทักษะการพัฒนาเว็บไซต์ตั้งแต่พื้นฐานจนถึงระดับสูง รวมถึงการใช้ HTML, CSS, JavaScript และ Frameworks ต่างๆ</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">การพัฒนาซอฟต์แวร์</h3>
            <p className="info-description">นักศึกษาจะได้เรียนรู้การพัฒนาซอฟต์แวร์ด้วยภาษาโปรแกรมยอดนิยม เช่น Python, Java, และ C++</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">การจัดการฐานข้อมูล</h3>
            <p className="info-description"> การเรียนรู้การออกแบบและจัดการฐานข้อมูล เช่น MySQL, PostgreSQL, และการทำงานกับระบบฐานข้อมูลใหญ่</p>
          </div>
        </div>
      </div>

      {/* Container ใหม่สำหรับแกลเลอรี (Moved Below) */}
      <div className="image-gallery-container">
        <h2 className="gallery-title">แกลเลอรีรูปภาพ</h2>
        <div className="image-gallery">
          <div className="image-item">ภาพ 1</div>
          <div className="image-item">ภาพ 2</div>
          <div className="image-item">ภาพ 3</div>
          <div className="image-item">ภาพ 4</div>
          <div className="image-item">ภาพ 5</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
