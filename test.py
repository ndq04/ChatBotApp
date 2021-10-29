# import googletrans
# from googletrans import Translator

# translator=Translator()
# language = googletrans.LANGUAGES
# text = translator.translate(text='ban ten gi', src='vi', dest='en')
# print(text)

#------------------------------------------------------------------------

# import winsound
# frequency = 2500  
# duration = 500 

# def MT(m, n):
#   a = []
#   while True:
#     try:
#       for i in range(0, m):
#         a.append([])
#         for j in range(0, n):
#           x = int(input("Nhập phần tử : "))
#           a[i].append(x)

#       print("\nMa trận vừa nhập là: ")
#       for i in range(0, m):
#         for j in range(0, n):
#           print("%3d " % a[i][j], end='')
#         print()
#       break
#     except ValueError: 
#       winsound.Beep(frequency, duration)
#       print('NHẬP SAI !!!!')
#       print('Không hợp lệ! Mời bạn nhập lại!')
#       continue

# def nhap():
#   while True:
#     try: 
#       print('Nhập vào 1 ma trận số nguyên (2 dòng, 3 cột): ')
#       m = int(input('Nhập số dòng m: '))
#       n = int(input('Nhập số cột n: '))
#       if(m!=2 or n!=3):
#         winsound.Beep(frequency, duration)
#         print('NHẬP SAI !!!!')
#         continue
#     except ValueError: 
#       print('Không hợp lệ! Mời bạn nhập lại!')
#       continue
#     return m, n

# m,n=nhap()
# MT(m,n)

#--------------------------------------------------------------------------
