# 4anime-sama
A batch download link generator for 4anime.to.


## Purpose

* The python script can generate download links for an anime hosted on [4anime](https://4anime.to/).
* The generated links can be copied to a text file and batch dowloaded using a download manager. (IDM, ADM, etc)

## Instructions
* Navigate to [4anime.to](https://4anime.to/).
* Search/Select the anime you want to download (e.g. [Naruto](https://4anime.to/anime/naruto)).
* Click on the First Episode of the anime.
* Right click & Copy the download link located beneath the player.
* Run the script in the repo folder & follow the instructions. (Check **Usage** for more.)

## Usage

* Clone the [repo](https://github.com/hyPnOtICDo0g/4anime-sama) to your computer.
```
git clone https://github.com/hyPnOtICDo0g/4anime-sama.git
```  
* Navigate to the repo folder & look for the python script.
```
cd 4anime-sama
```

* Excecute the following command to run the script
    
```
python 4anime.py
```

* Now you will get the promt which means the script is running
* Enter the link to the first episode and the start and end of the episode whose links you want to generate
* The script will now output the links of the episodes you requested for

### Advanced script
* Create a file (say in.txt) that has the links to episode 1 and the numbers of the start and end episodes you want
* Execute the command
```
python > out.txt < in.txt
```
* The generated links will now be stored in the file out.txt that can be used in the below mentioned download managers
    
### Alternative (if you aren't familiar with scripts)
* Navigate to [Google Colab](https://colab.research.google.com/drive/1q56pQDS7m4LmQESZju9hy8qOqu6C8-c2).
* Click on **Open in Playground** located at the top-right corner.
* Click on the run button & you'll be prompted to Sign-in to your Google account.
* After Signing in, click on the run button & you'll be prompted with a warning.
* Click on **Run Anyway** & wait for the Jupyter Notebook to process.
* Later, Scroll down and follow the instructions.
    
## Downloading
   * Copy the generated links (output) into a text file & save it.
   * They can be batch downloaded using a Download Manager.
   * Note: After feeding the Download Manager with the text file, Queue your Downloads to 2-3 videos or it may result in a 503 error, as the website doesn't allow a single ip to download multiple files at one go.
    
        #### Download Managers:
        * Internet Download Manager(IDM)/Xtreme Download Manager(XDM): For Windows/MAC
        * uGet: For Linux
