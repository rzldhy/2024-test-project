#https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/python

def snail(array):
    result = []
    if not array or not array[0]:
        return result

    while array:
        # ambil baris pertama
        result += array.pop(0)
        # jika array habis setelah di-pop, keluar
        if not array or not array[0]:
            break
        # ambil elemen terakhir tiap baris (kanan)
        for row in array:
            result.append(row.pop())
        # jika array habis setelah itu
        if not array or not array[0]:
            break
        # ambil baris terakhir secara reverse (bawah)
        result += array.pop()[::-1]
        # ambil elemen pertama tiap baris secara bottom-up (kiri)
        for row in reversed(array):
            result.append(row.pop(0))
    return result
