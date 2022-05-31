---
sidebar_position: 1
---

# Installation de SeaShield

Où puis-je trouver SeaShield ?

:::tip Réponse :

La réponse est assez simple, rejoignez nous sur **[Discord](https://discord.gg/8fwQvf6Tdv)** et rendez vous sur la boutique pour **[souscrire à un abonnement](https://ewen.tebex.io/category/2090953)**
:::

Une fois l'achat effectué, une clé de licence va vous être attribué par le biais d'un **message privé du bot Discord de SeaShield** et le fichier compresser contenant SeaShield sera disponible sur votre **[keymaster](https://keymaster.fivem.net/asset-grants)** mentionné lors de votre achat.

## 1 - Implanter SeaShield sur son serveur FiveM

Rendez vous dans votre dossier `resources` et glisser le dossier Seashield **décompressé**

Vous devriez avoir un dossier comme celui-ci dans votre dossier `resources`

```c
resources/SeaShield
    ├── seashield_banlist.sql  # SQL a implanter dans votre BDD
    ├── fxmanifest.lua  # Manifest permettant le lancement du script SeaShield
    ├── .fxap  # Protection Asset Escrow
    │            
    ├── client
    │   └── Plusieur fichier proteger par Asset Escrow
    │
    ├── configs # Fichier de Configuration
    │   ├── cl_config.lua
    │   ├── sh_utils.lua
    │   └── sv_config.lua
    │
    ├── server 
    │    └── Plusieur fichier proteger par Asset Escrow
    ├── stream 
    │    └── Plusieur fichier proteger par Asset Escrow
    └── vendor   
        └── Plusieur fichier proteger par Asset Escrow
```

## 2 - Configurer SeaShield
### 2.1 Configuration cl_config.lua

#### AntiKillEngine

*Je ne connais pas* | `false` par défaut

#### AntiSuperJump

Banni les Super Saut | `false` par défaut

#### AntiBlips

Banni les joueurs ayant des blips sur la map | `false` par défaut.
(*non recommandé si vous avez des blips. Exemple : Job Police avec collègue visible sur la map*)

#### AntiFastRun

Banni les joueurs en Super Vitesse | `false` par défaut

#### AntiFreecam

Banni les joueurs en Freecam | `false` par défaut
(*Ultra Sensible, possibilité de ByPass disponible avec exports. Chapitre Expert*)

#### AntiSpectate

Banni les joueurs passant par le mode spectateur pour voir les autres joueurs | `true` par défaut sur les 2 options
```
Active = true,
BanActive = true,
```

#### AntiNoClip

Banni les joueurs passant par le mode NoClip | `false` par défaut
```
Active = false,
PositionBypass = {
    vector3(0,0,0),     # Ajout des différentes positions non prise en compte par SeaShield
},
BanActive = true,
```

#### AntiTextureStream

Banni les joueurs utilisant un stream de Texture interdite (Idéal pour les menus injectés) | `false` par défaut
```
Active = false,
BanActive = true,
TextureName = {
    'commonmenu', --    #Exemple, ajoutez autant de texture souhaité
}
```

#### AntiThermalVision

Banni les joueurs utilisant la vision thermique | `true` par défaut

#### AntiNightVision

Banni les joueurs utilisant la vision nocturne | `true` par défaut

#### ESX

Banni les joueurs utilisant le Trigger Object différent que celui mentionné ci-dessous | `true` par défaut   
(*Uniquement pour les propriétaires utilisant le Framework ESX*)

```
Active = true,
Trigger = 'esx:getSharedObject'     #A modifier par votre trigger Object ESX
```

#### AntiFlyVehicle

Banni les joueurs voulant faire voler les véhicules | `true` par défaut
```
MaxVehicleFly = 15  #Par défaut
```

### 2.2 Configuration sh_utils.lua

Avec la nouvelle version de SeaShield, **sh_utils.lua** permet l'ajout de votre propre logo ainsi que la traduction des différentes détections

### 2.3 Configuration sv_config.lua

#### Lang

Permet de changer la langue de SeaShield | `FR` par défaut

#### ServerName

Permet de changer le nom de votre Serveur | `ServerName` par défaut

#### License

Permet de changer le nom de votre Serveur | `licence` par défaut  
**C'est ici que votre licence doit être implanté !**

#### devMode

Permet d'activer le mode Dev | `false` par défaut  
(*Active des logs pour debug certaines fonctions*)

#### UseStaffESX

Permet d'activer le mode Dev | `false` par défaut  
```
Active = true,
GroupList = {
    ['yourGroupESX'] = true,    #Sur ESX, les groups admin sont : "admin" ou "superadmin"
},
DefaultGroupName = 'user',  #En général, sur ESX, le groupe utilisateur par défaut est 'user'
```

#### deferralsCards

Active la visibilité du check de connexion à la connexion d'un joueur | `true` par défaut

#### allowStaff

Ne pas utiliser si "UseStaffESX" est actif | `true` par défaut
```
['LicenseWL'] = true,

#EXEMPLE

['licence:15z4dqz68498498q4z6d8484zd8'] = true,
```

#### Webhooks

C'est ici que vous ajouterez le lien de vos Webhook  
Voici un lien pour **[générer vos webhooks](https://support.discord.com/hc/fr/articles/228383668-Utiliser-les-Webhooks)** si vous ne savez pas le faire

#### ESX (Server Side)

Configuration d'ESX coté serveur, **uniquement si vous utilisez le framework ESX**
```
UseESX = true,      # true Uniquement si vous utilisez ESX
Trigger = 'esx:getSharedObject',    # Trigger Object ESX utilisé coté serveur (par défaut : esx:getSharedObject)
BanCommand_Group = {
    ['fondateur'] = true        # Group ESX pour autorisé l'utilisation de la commande de ban
},
UnbanCommand_Group = {
    ['fondateur'] = true        # Group ESX pour autorisé l'utilisation de la commande de déban
},
```

#### VehicleMaxSpeed

Banni un joueur si la vitesse du véhicule dépasse la valeur par défaut | `true` par défaut
```
MaxSpeed = 530
```

#### AntiGodMod

Banni un joueur si un GodMod est activé | `true` par défaut

#### AntiInvisible

Banni un joueur si celui-ci est invisible | `true` par défaut

#### AdminMenu

Permet l'accès au Menu Admin directement en jeu | `true` par défaut
```
BypassESX = true,
BypassList = {
    ['Group'] = true, -- Si vous utilisez ESX, indiquez vos différents groupe 
    ['license:...'] = true, -- Si vous n'utilisez pas ESX, indiquez les différentes licences autorisées
},
```

#### AntiStopEulen

Banni un joueur essayant de stop une resources | `true` par défaut
```
list = {
    SeaShield = true, -- Si vous souhaitez ajouter des resources protegées par l'anti-stop, ajoutez les ici.
}
```

#### AntiDesudo

Banni un joueur utilisant l'injecteur Desudo | `true` par défaut

#### MassDeleteVehicle

Banni un joueur utilisant certainement une suppression massive de véhicule | `true` par défaut
```
MaxVehicleDelete = 5, -- Conseillé à 15
```

#### AntiWeaponDamageModifier

Banni un joueur modifiant les dégats d'une arme | `true` par défaut
```
MaxDamageMeleeMultiplier = 5.0,     # Conseillé : 5.0
MaxDamageWeaponMultiplier = 5.0,    # Conseillé : 5.0
```

#### UseScreenShot

Permet l'affichage d'une screenshot de l'écran joueur au moment de son ban dans les webhooks | `true` par défaut

#### Vehicles

Permet de ban un joueur essayant de faire spawn un véhicule blacklister | `true` par défaut  
(*Vous pouvez rajouter ou supprimer autant de véhicules que vous souhaitez. La liste actuelle est blacklist sur la plupart des serveurs RP*)

#### Explosions

Banni un joueur ayant fait spawn plusieur explosion dans un laps de temps court | `true` par défaut  
(*Les valeurs par défaut sont largement nécessaire, si vous rencontrez de faux positif alors augmentez les options suivante.*)
```
LimitMassExplosionEvent = 25
```

#### Peds

Autorise le spawn des PEDs indiqué dans la whitelist | `true` par défaut
```
#POUR AJOUTER UN PED
[GetHashKey('a_f_o_soucent_01')] = true,

#POUR AJOUTER UN PED AVEC LE HASH
[-1354005816] = true,
```

#### Props

Autorise le spawn des Props indiqué dans la whitelist | `true` par défaut
```
#POUR AJOUTER UN PROPS
[GetHashKey("prop_pencil_01")] = true,

#POUR AJOUTER UN PROPS AVEC LE HASH
[-1354005816] = true,

#Option 

LimitMassSpawnProps = 40,   -- Augmenter si nécessaire
AntiMassPropsDelay = 10, -- Secondes
```

#### Particles

Autorise le spawn des Particules indiqué dans la whitelist | `true` par défaut
```
#POUR AJOUTER UNE PARTICULE
[GetHashKey('water_splash_plane_trail')] = true,

#POUR AJOUTER UNE PARTICULE AVEC LE HASH
[-1354005816] = true,
```

#### FireEvent

*Je ne sais pas* | `true` par défaut

#### AntiProjectileEvent

Banni les joueurs utilisant les projectiles | `true` par défaut

#### AntiGiveWeapon

Banni les joueurs voulant se donner une arme | `true` par défaut

#### AntiRemoveWeapon

Banni les joueurs voulant supprimer des armes | `true` par défaut

#### AntiRemoveAllWeapon

Banni les joueurs voulant supprimer toutes les armes | `true` par défaut

#### AntiClearPedTasks

Banni les joueurs voulant executer un ClearPedTask | `true` par défaut

#### AntiGiveWeaponESX

Banni les joueurs voulant se donner une arme et utilisant le framework ESX | `true` par défaut

#### AntiShoot

Banni les joueurs voulant tirer avec une arme | `true` par défaut

#### BlacklistWeapons

Banni les joueurs voulant faire spawn une arme blacklist | `true` par défaut  
(*La liste est largement suffisante, si vous souhaitez ajouter ou supprimer une arme de la liste, il n'y a pas de problème particulier*)
```
#POUR AJOUTER UNE ARME
[GetHashKey('weapon_marksmanpistol')] = true,
```

#### AntiSpamTriggers

Banni les joueurs essayant de spammer un trigger en particulier. | `true` par défaut | `TriggersList` permet de liste les triggers à proteger  
```
#POUR AJOUTER UN TRIGGER

TriggersList = {
    'trigger1',
    'trigger2',
    'trigger3',
},

#POUR AJUSTER LE RATE LIMITER

NumberLimit = 15,   #C'EST PAR ICI
```

#### BlacklistEvents

Banni les joueurs essayant d'utiliser un trigger Blacklist | `true` par défaut | `TriggersList` permet de liste les triggers à proteger  
```
#POUR AJOUTER UN TRIGGER

TriggersList = {
    'trigger1',
    'trigger2',
    'trigger3',
},
```

#### ListWeapon

**Éviter de toucher à cette liste qui permet l'anti give weapon**



