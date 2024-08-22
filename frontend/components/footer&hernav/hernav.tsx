import { Menu, Avatar, Button,Divider} from 'antd';
import { HomeOutlined, ExperimentOutlined, InfoCircleOutlined, QuestionCircleOutlined,UserOutlined} from '@ant-design/icons';
import Image from 'next/image';

const { Item } = Menu;

export const HorizontalNav: React.FC = () => {
  return (
    <>  
    <Menu mode="horizontal" style={{ width: '100%', height: '66px', display: 'flex',justifyContent: 'flex-start', alignItems: 'center' }}>
   
      <div style={{ marginLeft: '10px'}}>  
        <Image width={55} height={55} src="https://img.icons8.com/nolan/64/paper-plane.png" alt="paper-plane" style={{ transform: 'rotate(315deg)' }} />
      </div>

      <div style={{ display: 'flex',  justifyContent: 'flex-start'}}>
      <span style={{marginLeft:"10px",marginRight: '10px', fontSize: '20px', fontWeight: 'bold' }}>APT Detect X</span>
      </div>
      <style jsx>{`
          div:hover {
              transform: scale(1.05);
          }
      `}</style>
      <div style={{ 
          background: '#E6F4FF', 
          borderRadius: '7px', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.3s ease-in-out',
          marginLeft: '40px',
            fontSize: '20px',
            fontWeight: 'bold',
            // padding: '1px'
      }}>

            <Item key="Home" icon={<HomeOutlined style={{ fontSize: '18px' }}/>} onClick={() => window.location.href = '/'}>
                HOME
            </Item>
    </div>
    <div style={{ 
          background: '#E6F4FF', 
          borderRadius: '7px', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.3s ease-in-out',
          marginLeft: '10px',
            fontSize: '20px',
            fontWeight: 'bold',
            // padding: '3px'
      }}>
        <Item key="Lab" icon={<ExperimentOutlined style={{ fontSize: '18px' }}/>} onClick={() => window.location.href = '/lab'}>
            Lab
        </Item>
    </div>
        <div style={{ 
          background: '#E6F4FF', 
          borderRadius: '7px', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.3s ease-in-out',
          marginLeft: '10px',
            fontSize: '20px',
            fontWeight: 'bold',
            // padding: '3px'
      }}>
          <Item key="Learn More" icon={<InfoCircleOutlined style={{ fontSize: '18px' }} />} onClick={() => window.location.href = '/LearnMore'}>
            Learn More
        </Item>
    </div>
    <div style={{ 
          background: '#E6F4FF',  
          borderRadius: '7px', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.3s ease-in-out',
          marginLeft: '10px',
            fontSize: '20px',
            fontWeight: 'bold',
            // padding: '3px'
      }}>
          <Item key="HELP" icon={<QuestionCircleOutlined style={{ fontSize: '18px' }} />} onClick={() => window.location.href = 'C:/wsn/222AAA/cti-stix-visualization/index.html'}>
            HELP
        </Item>
      </div>
      <div style={{ 
          backgroundColor: '#f0f0f0', 
          borderRadius: '10px', 
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.3s ease-in-out',
          marginLeft: 'auto',
            marginRight: '20px',
             alignItems: 'center'
            
      }}>
        <Avatar icon={<UserOutlined style={{ fontSize: '18px' }}/>} />
          <Button type="primary" style={{ fontSize: '20px', marginLeft: '20px' }} onClick={() => window.location.href = '/'}>Logout</Button>
      </div>
    </Menu>
    <Divider style={{ margin: 0, borderWidth: 2 ,borderColor:"#1677FF"}} />
    </>
  );
};