# 4Anime-sama
A batch download link generator for 4anime.to.


## Purpose

* The Web App/python script can generate download links for anime hosted on [4anime](https://4anime.to/).
* The generated links can be copied to a text file and batch dowloaded using a download manager. (IDM,FDM, etc)

## Instructions
* Navigate to [4anime.to](https://4anime.to/).
* Search/Select the anime you want to download (e.g. [Naruto](https://4anime.to/anime/naruto)).
* Click on the First Episode of the anime.
![](https://github.com/hyPnOtICDo0g/4anime-sama/blob/master/firstep.png?raw=true)

* Right click & Copy the download link located beneath the player.
![](https://github.com/hyPnOtICDo0g/4anime-sama/blob/master/linkcopy.png?raw=true)
* Run the Web App/python script located in the repo folder & follow the instructions. (Check **Usage** for more.)

## Usage


### [Web App!](https://hypnoticdo0g.github.io/4Anime-sama/) 👈
* Enter the link to the First Episode and the Start & End numbers of the Episode whose links you want to generate.
* The links will be automatically generated & you can either navigate to the links of the induvidual episodes or download a text file containing the links.

### Alternative (using the python script)


* Clone the [repo](https://github.com/hyPnOtICDo0g/4anime-sama) to your computer.
```
git clone https://github.com/hyPnOtICDo0g/4anime-sama.git
```  
* Navigate to the repo folder & look for the python script.
```
cd 4anime-sama
```
* Excecute the following command to run the script.
```
python 4anime.py
```
* Now you will get a prompt which means the script is running.
* Enter the link to the First Episode and the Start & End numbers of the Episode whose links you want to generate.
* The script will now output the links of the Episodes you requested for.

### Advanced script
* Create a file (say in.txt) that has the link to Episode 1 and the numbers of the Start and End Episodes you want. 
* Format:
    ```
    <link>
    <Start Episode number>
    <End Episode number>
    ```
   e.g.  
    ```
   https://storage.googleapis.com/linear-theater-254209.appspot.com/v5.4animu.me/Naruto/Naruto-Episode-1-1080p.mp4  
    1  
    10
     ```
* Execute the command
```
python 4anime-auto.py > out.txt < in.txt
```
* The generated links will now be stored in the file out.txt that can be used in the below mentioned Download Managers.
    
## Downloading
   * Using the python script: Copy the generated links (output) into a text file & save it.
   * Using the Web App: Generate the links and download the text file from the Web App. 
   * They can be batch downloaded using a Download Manager.
  
        #### Download Managers:
        * Windows: [IDM](https://www.internetdownloadmanager.com/download.html) / [FDM](https://www.freedownloadmanager.org/download.htm) / [uGet](https://ugetdm.com/downloads/windows/)
        * MAC: [FDM](https://www.freedownloadmanager.org/download-fdm-for-mac.htm)
        * Linux: [uGet](https://ugetdm.com/downloads/#linux-distributions)

## Issues
* There may be a couple exceptions, but I've found only one anime so far which changes the URL format in-between the episodes. The problem lies with the source so until I figure out a workaround, please open an issue or report the anime name in the comments in this [thread](https://www.reddit.com/r/ScriptSwap/comments/fu54ch/made_a_python_script_for_downloading_anime_from/). Instructions to download if the above ever happens lies in this [gist](https://gist.github.com/hyPnOtICDo0g/bfa2c6194737d8b4c6df89c89b91d895).
* If you ever encounter any other errors then navigate to the above gist.
* After feeding the Download Manager with the text file, queue your downloads to 2-3 videos or it may result in a 503 error, as the website doesn't allow a single ip to download multiple files at one go.

## Collaborators ✨
[riskycase](https://github.com/riskycase)  
[hyPnOtICDo0g](https://github.com/hyPnOtICDo0g)

## Disclaimer
This software has been developed only for educational purposes. By no means this encourage content piracy.  
Please support the original content creators!  
The developers of this application does not have any affiliation with the content providers available.
