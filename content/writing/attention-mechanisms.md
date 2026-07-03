---
title: Attention Mechanisms
description: Scaled dot-product attention and why it works.
date: 2025-06-15
tags:
  - ml
  - transformers
  - math
draft: false
---

# Attention Mechanisms

Attention lets a model dynamically weight which parts of the input matter for each output position. It's the heart of the [[transformer-architecture|Transformer Architecture]].

## scaled dot-product attention

For queries $Q$, keys $K$, and values $V$:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right) V
$$

The scaling factor $\sqrt{d_k}$ keeps dot products from growing too large before softmax, which would push gradients toward zero.

## multi-head attention

Multiple heads let the model attend to different relationship types in parallel — syntax in one head, coreference in another, and so on.

> [!note] Intuition
> Think of attention as a soft lookup: each query asks "which keys are relevant?" and pulls a weighted blend of values.

## code sketch

```python
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(q, k, v):
    d_k = q.size(-1)
    scores = torch.matmul(q, k.transpose(-2, -1)) / (d_k ** 0.5)
    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, v)
```

## related

- [[transformer-architecture]]
- [[embeddings-and-retrieval]] — where attention outputs often end up as retrievable vectors

← [[writing/index|all writing]]
