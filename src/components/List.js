import React from 'react';
import Modal from 'react-modal'

const ulStyle = { listStyleType: "none",margin: "0",marginTop: "50px",padding: "0" };
const liStyle = { marginTop: "20px", padding: "30px 20px" ,border: "2px solid palevioletred",borderRadius: '5px'};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}; 


// Listコンポーネントの作成
const List = (props) => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {        
    subtitle.style.color = '#3ab60b';
  }

  function closeModal(){
    setIsOpen(false);
  }

  // render() {
    return (
    <ul style={ulStyle}>
      {props.todo.map( (todo, i) => {
        return <li onClick={openModal} style={liStyle} key={i}>{todo.title}<input type="button" value="☓"
        onClick={() => props.deleteTodo(i)}/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p ref={_subtitle => (subtitle = _subtitle)}>{todo.title}</p>
        </Modal>
        </li>
      })}
    </ul>
  )
    // }
};

export default List;