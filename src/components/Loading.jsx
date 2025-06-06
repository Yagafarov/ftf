import React from 'react'

const Loading = () => {
    return (
        <div className="fixed inset-0 glass bg-opacity-75 flex justify-center items-center z-50">
            <span className="loading loading-ring loading-xl"></span>
        </div>
    )
}

export default Loading