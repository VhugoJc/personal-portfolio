import MyWorkCard from "./MyWorkCard";
import {motion, AnimatePresence} from 'framer-motion';
import { useState } from "react";
import {data} from './dataWorks';
import Modal from "../Modal";

const MyWorkGrid = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [showModal,setShowModal]=useState(false);
    const items = data;
    const handleItems = (id) =>{
        setSelectedId(id); 
        setShowModal(!showModal);
    }

    return (  
        <>
        <div className="row my-work-grid">
            {
                items.map(item=>(
                    item.id%2===0
                    ?(
                    <motion.div key={item.id} layoutId={item.id} className="col-md-5" onClick={() => handleItems(item.id)}>
                        <MyWorkCard data={item}/>
                    </motion.div>
                    )
                    :(
                        <motion.div key={item.id} layoutId={item.id} className="col-md-7" onClick={() => handleItems(item.id)}>
                            <MyWorkCard data={item}/>
                        </motion.div >
                    )
                ))
            }
        </div>
         <AnimatePresence>
         {selectedId && (
             <motion.div layoutId={selectedId}  className="col-md-12">
                 <Modal data={items.filter(data=>data.id===selectedId)[0]} show={showModal} handleClose={handleItems}/>
             </motion.div>
         )}
     </AnimatePresence>
         </>
    );
}
 
export default MyWorkGrid;