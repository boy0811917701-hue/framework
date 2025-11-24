import React from "react";


const MemberCard = ({ name, role, icon,to}) => {

    return (


        <div>
            
                <div className="flex justify-center items-center p-3 text-center ml-20 mr-10 shadow-lg bg-blue-500 hover:bg-blue-600 
         transition">
                    <div className="flex-1-items-center p-10 justify-center w-5/10 justify-items-center " >
                        <img src={icon} alt={name} width="100px" />
                        <h3>{name}</h3>
                        <p className=" hover:shadow-lg hover:bg-blue-400 hover:cursor-pointer">{role}</p>
                        
                    </div>
                </div>

            </div>
      
    );
};

export default MemberCard;