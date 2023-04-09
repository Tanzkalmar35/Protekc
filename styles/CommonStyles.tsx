/*
* This file contains the different styles
*/

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  // styles for the general app
  generalApp: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1a1a1a',
  },

  // styles the general properties of the subsections
  subSection: {
    padding: '1.3rem',
    marginLeft: '5vw',
    marginRight: '5vw',
    marginBottom: '5vh',
  },

  // styles for the small subsection descriptions e.g. in home screen "vault"
  sectionDescription: {
    fontSize: '1.1rem',
    marginLeft: '5vw',
    marginTop: '5vh',
    color: 'white'
  },

  // styles for the categories in the vault subsection
  category: {
    padding: '1.3rem',
    margin: '.5rem',
    backgroundColor: '#333333',
    borderRadius: '.8rem',
    flexDirection: 'row',
    alignItems: 'center',
  },

  // styles for the title of the vault categories
  categoryTitle: {
    marginLeft: '2.5rem',
    marginBottom: '-.3rem',
    fontSize: '1rem',
    color: '#fff',
  },

  // styles the color beeing displayed in the category card
  vaultCategoryColor: {
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: '#4e4e86',
    borderRadius: '50%',
  },

  // styles the icon shown on the right of every category
  greaterThanSvg: {
    width: '1.5rem',
    height: '1.5rem',
    position: 'absolute',
    right: '5vw',
  },

  // styles the icon for adding a password on home screen
  staticCategorySvgIcon: {
    width: '1.5rem',
    height: '1.5rem',
    position: 'absolute',
    left: '5vw',
  },

  // styles the "other features" subsection
  subSectionOthers: {
    width: '100vw',
    position: 'absolute',
    bottom: '0',
  },

});
