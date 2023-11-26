// create context Api
import React from 'react'

import { createContext, useContext, useState } from 'react'

const Globalcontext = createContext()

const WombContext = ({ children }) => {


    return (
        <Globalcontext.Provider >
            {children}
        </Globalcontext.Provider>
    )
}
export default WombContext