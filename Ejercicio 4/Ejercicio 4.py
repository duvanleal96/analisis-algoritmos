# Stones on the Table - Codeforces 266A
# Versión optimizada

input()  # Leemos n pero no lo necesitamos directamente
s = input()

# Sumamos cuántas veces una piedra es igual a la anterior
print(sum(s[i] == s[i-1] for i in range(1, len(s))))