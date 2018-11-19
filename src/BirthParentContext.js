import React, { Component } from 'react'

const state ={
    age: 'any',
    race: 'any',
    ethnicity: 'any',
    religion: 'any',
    education: 'any',
    family: 'any',
    openclosed: 'any',
    freetext: '',
}

const BirthParentSearchContext = React.createContext(state.age, state.race, state.ethnicity, state.religion, state.education, state.family, state.openclosed, state.freetext);

export default BirthParentSearchContext;

