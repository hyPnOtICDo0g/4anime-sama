import re

print('\x1bc')
#Get link of episode 1

link = input("Enter the download link of the first episode: ")
print('\n')
if(re.search("Episode-0{0,2}1", link)):

#Get number of episodes to download

	startep = int(input("Enter the Start Episode number: "))
	endep = int(input("Enter the End Episode number: "))

#Generate links from episode 1 to eps and dump to stdout

	for x in range(startep, endep+1):

	#Apply appropriate formatting based on the naming style

		if(link.find("Episode-1") >= 0):
			print(link.replace("Episode-1", "Episode-%d" % x))

	#Below statements need replace since we'll need leading zeros

		elif(link.find("Episode-01") >= 0):
			print(link.replace("Episode-01", "Episode-%2d" % x).replace(" ", "0"))

		elif(link.find("Episode-001") >= 0):
			print(link.replace("Episode-001", "Episode-%3d" % x).replace(" ", "0"))
else:

	#We don't support this format, check the documentation

		print("This link is not supported, check link once again!")
		exit()
