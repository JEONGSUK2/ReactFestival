import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { styled } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'

const StyleDate = styled(DatePicker)`
    border: 1px solid #ddd;
    background-color: #eee;
    width: 300px;
    height: 100px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
`
const {kakao} = window;

function Datapicker() {

    useEffect(()=>{

        var container = document.getElementById('map');  //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(35.8683397, 128.593975), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(35.8683397, 128.593975); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
        position: markerPosition
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        var roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
        var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
        var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
        
        var position = new kakao.maps.LatLng(35.8683397, 128.593975);
        // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
        roadviewClient.getNearestPanoId(position, 50, function(panoId) {
            roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
    },[])
});


    const [dateRange, setDateRange] = useState([new Date(),null]);
    const [startDate, endDate] = dateRange;
 
  return (
    <>
    <StyleDate 
    locale={ko} 
    selectsRange={true}
    startDate={startDate}
    endDate={endDate}
    onChange={(date)=> setDateRange(date)}
    dateFormat="yyyy년MM월dd일"
    minDate={subDays(new Date(), 10)}
    maxDate={addDays(new Date(), 300)}
    monthsShown={2}
    />
       <div id="map" style={{width: "500px", height: "500px"}}>
       </div>
       <div id="roadview" style={{width: "500px", height: "500px"}}>
       </div>
       

    </>
  )
}

export default Datapicker