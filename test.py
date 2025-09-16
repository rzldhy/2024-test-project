#www.codewars.com/kata/52742f58faf5485cae000b9a/train/python

def format_duration(seconds):
    if seconds == 0:
        return "now"

    # Define units in seconds
    intervals = [
        ('year',   365 * 24 * 60 * 60),
        ('day',    24 * 60 * 60),
        ('hour',   60 * 60),
        ('minute', 60),
        ('second', 1)
    ]

    parts = []
    for name, count_in_seconds in intervals:
        if seconds >= count_in_seconds:
            value = seconds // count_in_seconds
            seconds %= count_in_seconds
            if value == 1:
                parts.append(f"{value} {name}")
            else:
                parts.append(f"{value} {name}s")

    if len(parts) == 1:
        return parts[0]
    elif len(parts) == 2:
        return parts[0] + " and " + parts[1]
    else:
        return ", ".join(parts[:-1]) + " and " + parts[-1]