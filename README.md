# FindHeroMarvel

 Ce projet consiste a répertorié une partie des super-héros de l'univers
        Marvel. De Captain America en passant par Black Panther à Iron Man. Vous
        retrouverez à partir d'une liste vos super-héros favoris. Pour en savoir
        plus sur le personnage, il faudra cliquer dessus pour découvrir la
        description, l'image mais aussi les apparitions dans les comics et
        séries. L'API utilisé est The Marvel Comics API :
        https://developer.marvel.com/documentation/getting_started
     
        Cet application a été crée par Antony Correia, Marion Meurant, Souhayl
        Bendro et Maxime Lamy.
      

    
        Pour nous aider, nous avons utilisés les modules :
       - react-native-async-storage/async-storage
       - @react-navigation/bottom-tabs
       - @react-navigation/native
       - @react-navigation/stack
       - @reduxjs/toolkit
       - axios 
       - crypto-js
       - firebase 
       - formik 
       - react
       - react-native-image-picker
       - react-native-gesture-handler
       - react-native-keyboard-aware-scroll-view  
       - react-native-paper 
       - react-native-safe-area-context
       - react-native-screens 
       - react-native-vector-icons 
       - react-redux
       - redux-persist 
       - yup 
        
        
        Concernant les fonctionnalités, l'utilisateur peut s'inscrire et se
        connecter pour rejoindre la home de l'application. La home est la liste
        des super-héros, avec une ScrollView infinie, qui permet de charger
        chaque héros par ordre alphabétique. Pour choisir son héros, il y a une
        barre de recherche pour filtrer et ainsi trouver le héros qu'on cherchait
        sans passer par le scroll. L'utilisateur clique sur un personnage et
        tombe directement sur une fiche du personnage : Image, description,
        comics d'apparition et une icone de like pour enregistrer ses
        personnages Favoris. Une déconnexion est aussi accessible.
