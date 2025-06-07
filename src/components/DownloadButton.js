

const DownloadButton = ({ stageRef }) => {
  const handleDownload = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'sticker-canvas.png';
    link.href = uri;
    link.click();
  };

  return (
    <button onClick={handleDownload} style={{background:"lightgreen" ,color:"black" ,padding:'6px',fontWeight:'bold' ,display:'flex',flexDirection:'row',text:'center',height:'39px' ,width:'149px',borderRadius:'12px',borderColor:'green' ,marginTop: '10px' }}>
      Save Image
    </button>
  );
};

export default DownloadButton;
