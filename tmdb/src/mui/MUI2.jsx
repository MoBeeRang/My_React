import Button from '@mui/material/Button'
function MUI2() {
   //https://mui.com/material-ui/customization/palette/ 에서 색깔을 클래스명처럼 부여해서 사용가능하다. mui에서 지원하는 기능, sx에서만 사용되나봄
   //sx에서는 '&:hover'같은 것도 사용가능하나봄
   return (
      <div>
         <Button style={{ backgroundColor: '#1976d2', color: 'white', padding: 16 }}>버튼1</Button>
         <Button sx={{ backgroundColor: 'secondary.main', color: 'white', padding: '16px', '&:hover': { backgroundColor: 'red' } }}>버튼2</Button>
         <Button variant="outlined">버튼3</Button>
      </div>
   )
}

export default MUI2
