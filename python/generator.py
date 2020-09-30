import re

class Generator:
	def __init__(self, link, start, end):
		self.link = link
		self.start = start
		self.end = end
		self.validate()
	
	def loop(self):	
		#Iterates over numbers from start to end
		for episode in range(self.start, self.end+1):
			#Print out links for all episodes
			self.generate(episode)
			
	def generate(self, number):		
		#Get the size that we have to generate
		size = len(re.search("-0{0,2}1-1080p", self.link).group()) - 7
		#Pad the required number of zeros
		number = str(number).zfill(size)
		#Do the necessary replacements
		print(re.sub("-0{0,2}1-1080p", "-%s-1080p" % number, self.link))
			
	def validate(self):
		
		#Checks if there is a query string, dumps it and changes hostname
		if(self.link.find('?') + 1):
			self.link = self.link[:self.link.index('?')].replace('://', '://storage.googleapis.com/justawesome-183319.appspot.com/')
		#Checks if the link is supported
		if(re.search("-0{0,2}1-1080p", self.link)):
			self.loop()
		#This format isn't supported, inform the user of the same
		else:
			print("We don't support this format, please check documentation")
