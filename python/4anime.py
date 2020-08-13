from generator import Generator

#Clear terminal screen
print('\x1bc')

#Get link of episode 1
link = input("Enter the download link of the first episode: ")

#Get numbers of start and end episodes
startep = int(input("Enter the Start Episode number: "))
endep = int(input("Enter the End Episode number: "))

Generator(link, startep, endep)
