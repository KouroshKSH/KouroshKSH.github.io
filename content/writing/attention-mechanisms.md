---
title: Attention Mechanisms
description: Scaled dot-product attention and why it works.
date: 2025-06-15
tags:
  - ML
  - Transformers
  - Math
draft: false
---

# Attention Mechanisms

Attention lets a model dynamically weight which parts of the input matter for each output position. It's the heart of the [[transformer-architecture|Transformer Architecture]].

## Scaled Dot-Product Attention

For queries $Q$, keys $K$, and values $V$:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) V
$$

The scaling factor $\sqrt{d_k}$ keeps dot products from growing too large before softmax, which would push gradients toward zero.

## Multi-Head Attention

Multiple heads let the model attend to different relationship types in parallel — syntax in one head, coreference in another, and so on.

> [!note] Intuition
> Think of attention as a soft lookup: each query asks "which keys are relevant?" and pulls a weighted blend of values.

## Code Sketch

```python
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(q, k, v):
    d_k = q.size(-1)
    scores = torch.matmul(q, k.transpose(-2, -1)) / (d_k ** 0.5)
    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, v)
```

## Related

- [[transformer-architecture]]
- [[embeddings-and-retrieval]]

← [[writing/index|All writing]]
